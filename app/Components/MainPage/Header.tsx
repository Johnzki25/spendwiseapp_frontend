import SavingOutlinedIcon from "@mui/icons-material/SavingsOutlined"; 67k (gzipped: 25k)
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"; 66.9k (gzipped: 24.8k)
import AddOutlinedIcon from "@mui/icons-material/AddOutlined"; 66.7k (gzipped:24.7k)

export default function Header(){
    return (
        <nav className="flex justify-between items-center">
            {/* Logo Section */}
            <LogoSection />
            {/* SearchBar */}
            <SearchBar />
            {/* Button */}
            <Button />
        </nav>
    )
}

> function LogoSection() {
      return (
        <div className="flex gap-2 items-center">
             {/* Icon Container */}
        <div className={`bg-purple-600 flex items-center justify-center p-[11px] rounded-lg `}>
             { /* Icon */}
        <div className="w-[26px] h-[26px] items-center justify-center flex">
            <SavingOutlinedIcon
                sx={{ fontSize: "25px" }}
                className="text-white" 
           />
         </div> 
        </div>

        {/* App Name */}
        <div className="flex gap-1 text-[24px]">
            <span className={`font-bold text-purple-600`}>Spend</span>
            <span className="text-slate-600">Wise</span>
          </div>  
        </div>
      );  
}

> function SearchBar(){
    return (
        <div className={`h-[46px] bg-slate-50 flex items-center text-sm rounded-md pl-3 gap-1 w-[300px] `}
        >
        <div>
            <SearchOutlinedIcon className="text-slate-400" />        
        </div>
        <input
            placeholder="Search an expense..."
            className="bg-transparent outline-none w-full font-light" 
          />    
        </div>
    );
}

function Button(){
    return(
        <button className="bg-purple-600 gap-1 p-[12px] flex text-sm rounded-md text-white items-center justify-center pr-[18px] hover:bg-purple-700">
            <AddOutlinedIcon sx=={{ fontSize: "20px"}} />
            <span className="">New Expense</span>
        </button>
    );
}