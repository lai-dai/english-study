/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  // prettier-plugin-organize-imports là một plugin dành cho Prettier với một nhiệm vụ duy nhất nhưng cực kỳ hữu ích: Tự động sắp xếp lại các dòng import và xóa các import không sử dụng.
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  printWidth: 80, // Độ rộng dòng tối đa
  tabWidth: 2, // Số lượng khoảng trắng cho mỗi lần tab
  useTabs: false, // Sử dụng tab thay vì khoảng trắng
  singleQuote: false, // Sử dụng dấu ngoặc kép thay vì dấu nháy đơn
  trailingComma: "all", // Thêm dấu phẩy sau tất cả các thuộc tính trong object
  semi: false, // Không thêm dấu chấm phẩy sau mỗi câu lệnh
  jsxSingleQuote: false, // Sử dụng dấu nháy đơn thay vì dấu nháy kép trong JSX
  bracketSameLine: false, // Đặt dấu ngoặc {} xuống dòng mới
  // arrowParens: "avoid", // Không thêm dấu ngoặc cho các tham số của hàm một tham số
  arrowParens: "always", // Thêm dấu ngoặc cho các tham số của hàm nhiều tham số
  endOfLine: "lf", // Sử dụng LF thay vì CRLF
  bracketSpacing: true, // Thêm khoảng trắng sau dấu ngoặc {}
  proseWrap: "preserve",
}
