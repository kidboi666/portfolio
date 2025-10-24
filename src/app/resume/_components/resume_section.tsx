import type { PropsWithChildren } from "react";
import { H3, Paragraph } from "@/components/typography/heading";
import { cn } from "@/lib/utils";

function ColSection({ children }: PropsWithChildren) {
  return <div className="flex flex-col">{children}</div>;
}

function RowSection({ children }: PropsWithChildren) {
  return <div className="flex flex-row">{children}</div>;
}

function Title({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return <H3 className={cn("text-muted-foreground", className)}>{children}</H3>;
}

function Content({
  children,
  className,
}: PropsWithChildren & { className?: string }) {
  return <Paragraph>{children}</Paragraph>;
}

function List({ children }: PropsWithChildren & { className?: string }) {
  return <ul className="list-disc">{children}</ul>;
}

function ListItem({ children }: PropsWithChildren & { className?: string }) {
  return <li className="text-muted-foreground">{children}</li>;
}

ColSection.Title = Title;
ColSection.Content = Content;
ColSection.List = List;
ColSection.ListItem = ListItem;
RowSection.Title = Title;
RowSection.Content = Content;
RowSection.List = List;
RowSection.ListItem = ListItem;

export { ColSection, RowSection };
