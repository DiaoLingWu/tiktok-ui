import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }) {
   return (
      <div>
         <Header />
         <div className="Container">
            <div className="content">{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
