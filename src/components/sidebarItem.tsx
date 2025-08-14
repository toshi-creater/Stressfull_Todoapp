import { Link, useLocation } from "react-router-dom";
import { Icons } from "./icons";

interface SidebarItemProps  extends React.HTMLAttributes<HTMLDivElement> {
  href: string
  key: number
  name: string
  icon: keyof typeof Icons
}

const SidebarItem = ({
    href,
    key,
    name,
    icon
}: SidebarItemProps) => {
    const pathName = useLocation().pathname
    const Icon = Icons[icon]
    return (
        <li key={key}>
            <Link 
                to={href} 
                className={"flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group" + (pathName === href && " bg-gray-100")}
            >
                <Icon />
                <span className="ms-3">{name}</span>
            </Link>
        </li>
    );
};

export { SidebarItem };
