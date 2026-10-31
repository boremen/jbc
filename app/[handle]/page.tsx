import { Placeholder } from "@/components/placeholder";

export default function Page(props: PageProps<"/[handle]">) {
  return <Placeholder title="Profile" params={props.params} />;
}
