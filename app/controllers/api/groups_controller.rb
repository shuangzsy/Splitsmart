class Api::GroupsController < ApplicationController
  def index
    user = User.find_by(id: current_user.id)
    @groups = user.groups
    render :index
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
    @group = Group.find(params[:id])
    if @group
      render :show
    else
      render json: ["Group does not exsist"], status: 404
    end
  end

  def destroy
    @group = Group.find(params[:id])
    if @group
      @group.destroy
      render :show
    else
      render json: ["Group does not exsist"], status: 404
    end
  end
 
  def group_params
    params.require(:group).permit(:group_name)
  end
end
