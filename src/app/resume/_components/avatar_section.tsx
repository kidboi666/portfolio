import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function AvatarSection() {
  return (
    <div className="flex w-full items-center justify-center">
      <Avatar className="size-64 border-2 border-gray-200 shadow-lg">
        <AvatarImage
          src="/images/resume/profile.jpeg"
          alt="profile"
          style={{ margin: 0, objectFit: "contain" }}
        />
      </Avatar>
    </div>
  );
}
