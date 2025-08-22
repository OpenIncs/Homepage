
import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "17M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Companies tracked and processed nearly every month, providing near real-time insights."
    },
    {
        title: "1,000+",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Deal makers to help you find your favorite people to work with."
    },
    {
        title: "10,000+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Financial Institutions, endowments, and pension funds,to help you get started with fundraising."
    }
];
