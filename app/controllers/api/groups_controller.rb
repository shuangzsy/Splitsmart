class Api::GroupsController < ApplicationController
  def index
  end

  def create
    @group = Group.new(group_params)
      if @group.save
        render :show, status: 200
      else
        render json: @group.errors.full_messages, status: 400
      end
    end
  end

  def show
    @group = Friend.find(params[:id])
    if @friend
      render :show
    else
      render json: ["Friend does not exsist"], status: 404
    end
  end

  def destroy
    @friend = Friend.find(params[:id])
    if @friend
      @friend.destroy
      render :show
    else
      render json: ["Friend does not exsist"], status: 404
    end
  end
 
  def group_params
    params.require(:group).permit(:group_name)
  end
end
