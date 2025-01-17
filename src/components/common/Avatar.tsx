import {
  AvatarImage,
  Avatar as AvatarComponent,
  AvatarFallback,
} from "@/components/ui/avatar";

type AvatarProps = {
  src: string;
  fallback: string;
};

export const Avatar = ({ src, fallback }: AvatarProps) => {
  return (
    <AvatarComponent>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </AvatarComponent>
  );
};
