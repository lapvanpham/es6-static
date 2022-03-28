// Xây dựng lớp thông tin gồm các thuộc tính tên, mô tả và hàm tính toán có 1 tham số  mặc định có giá trị bằng 1, hàm này tăng gấp 3 lần giá trị của tham số truyền vào.

// Xây dựng lớp hình học kế thừa từ lớp trên. Có các thuộc tính là chiều dài, mô tả và hàm tính toán với 1 tham số truyền vào.

// Tạo các đối tượng của lớp hình học và gọi các thuộc tính của lớp đó, các thuộc tính của lớp cha, và hàm để quan sát kết quả.

class Shape {
	constructor(name, description) {
		this.name = name;
		this.description = description;
	}

	calculate(number = 1) {
		return number * 3;
	}
}

class Square extends Shape {
    constructor(name, description, side) {
        super(name, description);
        this.side = side;
    }

    calculate(number = 1) {
        return super.calculate(number) * this.side;
    }
}