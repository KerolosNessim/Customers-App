import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// eslint-disable-next-line react/prop-types
const TransactionChart = ({ customer, transactions }) => {
  // eslint-disable-next-line react/prop-types
  const customerTransactions = transactions.filter(
    (transaction) => transaction.customer_id === customer.id
  )

  const data = customerTransactions.map((transaction) => ({
    date: transaction.date,
    amount: transaction.amount,
  }))

  return (
    <div>
      <h2>{customer.name}'s Transactions</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="amount" stroke="#ffc107" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TransactionChart
