class Api::ExpensesController < ApplicationController
  before_action :require_logged_in
  
  def index
    user = User.find_by(id: current_user.id)
    @expenses = user.expenses
    render :index
  end

  def create
    @expense = Expense.new(expense_params)
    @expenses.creator_id = current_user.id
    if @expense.save
      render :show
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def show
    @expense = Expense.find(params[:id])
    if @expense
      render :show
    else
      render json: ["Expense does not exsist"], status: 404
    end
  end

  def update
    @expense = Expense.find(params[:id])
    if @expense.creator_id == current_user.id && @expense.update(expense_params)
      render :show
    else
      render json: @expense.errors.full_messages, status: 402
    end
  end

  def destroy
    @expense = Expense.find(params[:id])
    if @expense
      @expense.destroy
      render :show
    else
      render json["Expense does not exsist"], status: 404
    end
  end

  def expense_params
    params.require(:expense).permit(:description, :total_amount, :creator_id, :group_name, :settled)
  end
  
end
