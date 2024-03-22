from django.urls import path
from base.views.product_views import *

urlpatterns = [
    path('', getProducts, name='products'),
    path('items/<str:pk>/', getProduct, name='product'),
    path('add/', addProduct, name='add_product'),
    path('update/<int:pk>/', updateProduct, name='update_product'),
    path('delete/<int:pk>/', deleteProduct, name='delete_product'),
    path('search/<str:query>/', SearchProductListView.as_view(), name='search-products'),
]    