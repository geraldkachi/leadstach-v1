import "./sidebar.css";
// import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AdminIcon, CustomersIcon, DashboardIcon, LoanCalculatorIcon, PersonalBankingIcon, ReportsIcon, StatusIcon } from "../../assets";
// import Accordion from "../Accordion/Accordion";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useWindowDimensions } from "../../hooks";
import { DashboardIcon, DocumentsIcon, EmployeesIcon, FinanceIcon, HiringIcon, LeaveManagementIcon, MyTeamIcon, PerformanceIcon, ReportsAnalyticsIcon, SelfServiceIcon, TimeManagementIcon, TrainingIcon } from "../../assets";
import { Accordion } from "..";
interface SidebarProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation()
  const { width } = useWindowDimensions()
  const navigate = useNavigate();

  const logout = useCallback(() => {
    navigate("/");
    // Cookies.remove('Authenticated')
    // Cookies.remove('secret')
    localStorage.clear()
  }, [])


  // const routeList = [
  //   { route: "/dashboard", title: "Dashboard" },
  //   { route: "/customers", title: "Customers" },
  //   { route: "/personal-banking", title: "Personal Banking" },
  //   { route: "/history", title: "Status" },
  //   { route: "/stand-up", title: "Reports" },
  //   { route: "/report", title: "Loan Calculator" },
  //   { route: "/stand-up", title: "Admin" },
  //   // ...(isAuthorised("super-admin")
  //   //   ? [{ route: "/administrator", title: "Administrator" }]
  //   //   : []),
  // ];

  const faqArr = [
    {
      header: "Government?",
      content: `content for clients.`,
      route: "/Finance",
      title: "Finance",
    },
    {
      header: "What offer?",
      content: `content for clients..`,
      route: "/Self Service",
      title: "Self Service",
    },
  ];

  const routeList = [
    { route: "/dashboard", title: "Dashboard" },
    { route: "/employees", title: "Employees" },
    { route: "/my-team", title: "My Team" },
    { route: "/hiring", title: "Recruitment & Hiring" },
    { route: "/time-management", title: "Time Management" },
    { route: "/leave-management", title: "Leave Management" },
    { route: "/training", title: "Training" },
    { route: "/documents", title: "Documents" },
    { route: "/performance", title: "Performance" },
    { route: "/reports-analytics", title: "Reports & Analytics" },
    { route: "/finance", title: "Finance" },
    { route: "/self-service", title: "Self Service" },
  ];

  return (
    <section className={`sidebar hidden sm:block bg-white overflow-y-scroll`}>
      <div
        className={` ${open ? "sm:w-60 ease-in-out duration-500" : "w-20 ease-in-out duration-500"} overflow-y-scroll flex flex-col justify- transition-all ease-in-out text-white  h- relative duration-300`}
      >
        <div className="px-2 py-5">
          <div className={`${open ? "justify-between" : 'justify-center'} flex items-center`}>
            <img src="/logo.svg" alt="" className={`${!open && 'hidden'}`} />

            <img src="/arrowbreak.svg" onClick={() => setOpen(!open)} alt="arrow" className="cursor-pointer" />
          </div>
        </div>

        <div className={`flex flex-col justify-center items-center px-2 pt-2 ${open ? "ease-in-out duration-500" : "ease-in-out duration-500"}`}>
          <div
            className={`${open && "flex items-center justify-center ease-in-out duration-500"
              } inline-flex items-center pb-3 ease-in-out duration-500`}
          >
            {/* <MenuIcon onClick={() => setOpen(!open)} className={`ml-4 cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />
                        <HomeLogoIcon className={`${!open && "scale-0 hidden"}`} /> */}
            <p className={`${!open ? "hidden" : "!text-start sm:block text-[#BFBFBF] mx-2 lg:block text-xs  md:text-lg"}`}>MAIN MENU</p>
          </div>
          {routeList.map((item, index) => {
            const activeItem = location.pathname.includes(item.route);
            const iconArr = [
              <DashboardIcon key={1} index={activeItem} />,
              <EmployeesIcon key={2} index={activeItem} />,
              <MyTeamIcon key={3} index={activeItem} />,
              <HiringIcon key={4} index={activeItem} />,
              <TimeManagementIcon key={5} index={activeItem} />,
              <LeaveManagementIcon key={6} index={activeItem} />,
              <TrainingIcon key={7} index={activeItem} />,
              <DocumentsIcon key={8} index={activeItem} />,
              <PerformanceIcon key={9} index={activeItem} />,
              <ReportsAnalyticsIcon key={10} index={activeItem} />,
              <FinanceIcon key={11} index={activeItem} />,
              <SelfServiceIcon key={12} index={activeItem} />,
            ];
            return (
              <Link
                to={item.route}
                key={index}
                className={`${activeItem && "bg-[#1D8EE6] rounded-xl !text-[#fff]"
                  }
                  ${!open && 'text-center flex items-center justify-center'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-sm
                  !text-[#535768] w-full`}
              >
                <div key={index}> {iconArr[index]}</div>

                <span
                  className={`${!open && "hidden"} ${width < 1200 ? "" : ""
                    } origin-left ease-in-out duration-500 whitespace-nowrap`}
                >
                  {item.title}
                </span>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col items-center justify-center text-black">
          {faqArr.map((item, index) => {
            const activeItem = location.pathname.includes(item?.route);

            const iconArr = [
              // <DashboardIcon key={1} index={activeItem} />,
              // <DashboardIcon key={2} index={activeItem} />,
              <img src="/finance.svg" alt="" />,
              <img src="/self-service.svg" alt="" />
            ];
            return (
              <>
                <Accordion key={`faq_${index}`} heading={
                  <Link
                    to={item.route}
                    key={index}

                    className={`${activeItem && "bg-[#] rounded-[4px]"} ${activeItem ? "text-[#716C81]" : "text-[#716C81]"
                      } flex items-center cursor-pointer text-base gap-4`}
                  // className="flex items-center gap-4 js"
                  >
                    <span>{iconArr[index]}</span>
                    <h1 className={`${!open && "hidden"} "font-semibold my-1 text-base text-[#]"`}>{item?.title}</h1>
                  </Link>
                }>
                  <p className={` "py-5 text-[#]"`}>{item?.content}</p>
                </Accordion>
              </>
            )
          })}

            <p className={`${!open ? "hidden" : "sm:block text-[#BFBFBF] mx-2 lg:block text-xs  text-start md:text-lg"}`}>ACCOUNT</p>
            <div className={`${"bg-[#] rounded-xl !text-[#535768] mb-6 px-2"}
                  ${!open && 'px-2 text-center flex items-center justify-center'}
                  flex items-center gap-2 rounded-xl px-6 py-3 cursor-pointer mb-1 text-sm
                  !text-[rgb(83,87,104)] w-full`}
              onClick={logout}>
              <div><img src="/signnout.svg" alt="singout" /></div>

              <span className={`${!open && "hidden"} ${width < 1200 ? "" : ""} origin-left ease-in-out duration-500`}>Logout</span>
            </div>
        </div>

      </div>
    </section>
  );
};
export default Sidebar;
