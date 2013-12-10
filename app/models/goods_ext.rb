class GoodsExt < ActiveRecord::Base
  belongs_to :goods_prop
  belongs_to :order_goods,  :class_name => "OrderGoods", :foreign_key => "order_goods_id"  #  -> { includes :order }, for the effiency of access @goods_ext.order_goods.order
  
  attr_accessible :prop_value, :goods_prop_id, :order_goods_id
end
