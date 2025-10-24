import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex w-full justify-between rounded-md py-4 shadow-lg lg:w-lg">
      <div>
        <h1 className="font-bold uppercase">lee jin wook</h1>
        <ul className="flex uppercase">
          <li>
            <Button variant="ghost">portfolio</Button>
          </li>
          <li>
            <Button variant="ghost">about me</Button>
          </li>
          <li>
            <Button variant="ghost">contact</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
