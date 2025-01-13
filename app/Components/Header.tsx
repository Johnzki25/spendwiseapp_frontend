import SavingOutlinedIcon from "@mui/icons-material/SavingsOutlined"; 67k (gzipped: 25k)
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"; 66.9k (gzipped: 24.8k)
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"; 66.7k (gzipped:24.7k)

export default function Header(){
    return (
        <nav className="flex justify-between items-center">
            {/* Logo Section*/}
            <LogoSection />
            {/* SearchBar */}
            <SearchBar />
            {/* Button */}
            <Button />
        </nav>
    )
}

> function LogoSection() {

}

> function SearchBar(){

}

function Button(){
    return(
        <button className="bg-purple-600 gap-1 p-[12px] flex text-sm rounded-md text-white items-center justify-center pr-[18px] hover:bg-purple-700">
            <AddOutlinedIcon sx=={{ fontSize: "20px"}} />
            <span className="">New Expense</span>
        </button>
    )
}