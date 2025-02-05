import { getMarkdownContent } from "@/app/libs/markdown-controller";
import markdownToHtml from "@/app/libs/markdownToHtml";
import { produces } from "@/app/libs/placehold-data";
import markdownStyles from "./markdown-styles.module.css";

export default async function Page(props: {params: Promise<{id:string}>}) {
    const params = await props.params
    const id = params.id
    const filename = contents(id)[0].produce_name + ".md";
    const content = getMarkdownContent(filename);
    const htmlcontent = await markdownToHtml(content);
    return (
        <main>
        <div className="max-w-2xl mx-auto">
          <div 
            className={markdownStyles["markdown"]}
            dangerouslySetInnerHTML={{__html: htmlcontent}}
          />
        </div>
      </main>
    );
}

function contents(id:string) {
    return produces.filter((produce) => produce.id === id);
}