import "./ExpenseDetail.css"
function ExpenseDetail(){
    return(
        <div className="expence-detail">
        <div className="expence-detail__date">
            <div className="expence-detail__month">dec</div>
            <div className="expence-detail__datenum">5</div>
            <div className="expence-detail__year">2022</div>
        </div>
        <div className="expence-detail__title">
            Car
        </div>
        <div className="expence-detail__price">
            $250
        </div>
        
        </div>
    );
}
export default ExpenseDetail;