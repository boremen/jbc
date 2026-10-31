import { Placeholder } from "@/components/placeholder";

export default function Page(props: PageProps<"/[handle]/[shelf]">) {
  return <Placeholder title="Shelf" params={props.params} />;
}
