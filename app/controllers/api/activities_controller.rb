class Api::ActivitiesController < ApplicationController
  def index
    user = User.find_by(id: current_user.id)
    @activities = user.activities
    render :index
  end

  def create
    @activity = Activity.new(activity_params)
    @activity.participant_id = current_user.id
    if @activity.save
      render :show, status: 200
    else
      render json: @activity.errors.full_messages, status: 400
    end
  end

  def show 
    @activity = Activity.find(params[:id])
    if @activity
      render :show
    else
      render json: ["activity does not exsist"], status: 404
    end
  end

  def activity_params
    params.require(:activity).permit(:expense_id, :event)
  end

end
