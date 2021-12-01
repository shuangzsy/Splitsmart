# class Api::SplitsController < ApplicationController
#   before_action :require_logged_in
  
#   def index
#     @splits = Split.all
#     render :index
#   end


#   def show
#     @expense = Expense.find(params[:id])
#     if @expense
#       render :show
#     else
#       render json: ["Expense does not exsist"], status: 404
#     end
#   end

#   def expense_params
#     params.require(:expense).permit(:description, :total_amount, :creator_id, :group_name, :settled)
#   end
# end
