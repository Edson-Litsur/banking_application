import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar';
import TotalBalanceBox from '@/components/ui/TotalBalanceBox';
import React from 'react'
const Dasboard = () => {
    const loggedIn = {firstName: 'Edson ', lastName: 'Litsur', email: 'johnlitsur@gmail.com' };
  return (
   <section>
    <div className="home">
        <header className="home-header">
            <HeaderBox 
                type= "greeting"
                title= "Bem Vindo"
                user= {loggedIn?.firstName || 'Guest'} 
                subtext=" Acess e administre a sua conta de 
                transacções de forma eficiente."
            
            /> 

            <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1000.35}
            />

            RECENT TRANSACTIONS
        </header>
    </div>

    <RightSideBar user= {loggedIn} transactions={[]} banks={[]}
     />
   </section>
   
  )
}

export default Dasboard
