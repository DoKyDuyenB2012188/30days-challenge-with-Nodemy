# PRODUCT CART
## Properties
- object-fit: cover; ( lắp đầy nhưng ảnh bị cắt nếu qua to )
- object-fit: contain; ( không bị cắt )
- object-position: center; ( căn giữa hình ảnh)
- opacity: 0; ( làm mờ )
- visibility: hidden; ( ẩn nhưng vẫn chiếm vị trí )
- visibility: visible; ( hiện phần tử )
- outline: none;
- z-index: 1; ( chọn vị trí nào hiện lên trước )
## Trick
- overflow: hidden trong body, nếu đặt ở cart thi mất ảnh
- opacity: 0  == visibility: hidden
- position nếu có thì không phụ thuộc vào padding, margin
