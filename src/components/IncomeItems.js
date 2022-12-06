
import IncomeItem from "./IncomItem";

function IncomeItems({ items, onDelete }) {
    return (
        <div className="income-table-container">
            <h3 className="income-title"> Income Items</h3>
            <table className="income-table table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Value</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <IncomeItem item={item} onDelete={onDelete} />
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default IncomeItems;