//  Required imports


// Components, styling, assets
import SideToggleNavigation from "@/components/admin/navigation/side-toggle-nav";
import AdminMainHeader from "@/components/admin/sections/main-header";

export default function AdminLayout({ children }) {

    return(
        <div className='admin-page-layout'>
            <SideToggleNavigation />
            <div className='admin-page'>
                <AdminMainHeader />
                { children }
            </div>
        </div>
    );

}