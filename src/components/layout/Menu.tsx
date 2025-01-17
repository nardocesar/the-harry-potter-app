import { menu } from "@/const/menu";
import { twMerge } from "tailwind-merge";
import { houseTextColors } from "@/const/colors";
import Link from "next/link";
import { useCharactersContext } from "@/contexts/Characters";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useRouter } from "next/navigation";

export const Menu = () => {
  const { prefferedHouse } = useCharactersContext();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (value: string) => {
    router.push(value);
  };

  const value = pathname.includes("character/") ? "" : pathname;

  return (
    <>
      <ul className="hidden lg:block">
        {menu.map((item) => (
          <li key={item.href}>
            <Link
              className={twMerge(
                "flex p-2 hover:bg-gray-300 cursor-pointer transition-colors duration-300",
                houseTextColors[prefferedHouse],
                pathname === item.href && "bg-gray-300"
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="block p-4 lg:hidden">
        <Select value={value} onValueChange={handleChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a page" />
          </SelectTrigger>
          <SelectContent>
            {menu.map((item) => (
              <SelectItem key={item.href} value={item.href}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  );
};
