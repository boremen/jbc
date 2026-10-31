import { Placeholder } from "@/components/placeholder";

export default function Page(props: PageProps<"/tags/[tag]">) {
  return <Placeholder title="Tag" params={props.params} />;
}
