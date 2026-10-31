import { Placeholder } from "@/components/placeholder";

export default function Page(props: PageProps<"/[handle]/books/[book]">) {
  return <Placeholder title="Book" params={props.params} />;
}
