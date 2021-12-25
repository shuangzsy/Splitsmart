class Api::ExpensesController < ApplicationController
  before_action :require_logged_in
  
  def index
    user = User.find_by(id: current_user.id)
    @expenses = user.expenses
    render :index
  end

  def create
    total_amount = expense_params[:total_amount].to_f   #* 100
    split_params = params[:splits].to_unsafe_h
    # debugger

    begin
      Expense.transaction do 
        @expense = Expense.new(expense_params)
        @expense.total_amount = total_amount
        @expense.creator_id = current_user.id
        @expense.save!
        @splits = split_params.to_a.map do |split|
          user = User.find_by(email: split[0])
          split_amount = total_amount * split[1].to_f
          Split.create!(
            expense_id: @expense.id,
            user_id: user.id, 
            owe_amount: split_amount
          )
        end
      end
      render :show
    rescue => e
      render json: e, status: 422
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
      render json: ["Expense does not exsist"], status: 404
    end
  end

  def expense_params
    params.require(:expense).permit(
      :description, 
      :total_amount, 
      :creator_id, 
      :group_name, 
      :settled
    )
  end
  
end
