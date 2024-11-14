import css from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionTable}>
    <thead className={css.transactionThead}>
        <tr className={css.transactionTr}>
        <th className={css.transactionTh}>Type</th>
        <th className={css.transactionTh}>Amount</th>
        <th className={css.transactionTh}>Currency</th>
        </tr>
    </thead>
    
    <tbody>
        {items.map(item =>{
            return (
        <tr className={css.transactionTr} key={item.id}>
        <td className={css.transactionTd}>{item.type}</td>
        <td className={css.transactionTd}>{item.amount}</td>
        <td className={css.transactionTd}>{item.currency}</td>
        </tr>
            );
        })}
    </tbody>
    </table>
    )
}

export default TransactionHistory