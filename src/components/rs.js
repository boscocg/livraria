if (self.props.cart.length > 0) {
			if (self.props.cart.length == 1) {
				if (self.props.cart[0].id == book.id) {
					book.number = this.increaseNumbers(book.number);
					this.removeFromCart(0,book);
					this.addToCart(book);
				}
				else {
					book.number = 1;
					this.addToCart(book);
				}
			}
			else {
				for (var i = 0, len = self.props.cart.length; i < len; i++) {
					if (self.props.cart[i].id == book.id) {
						book.number = this.increaseNumbers(book.number);
						this.removeFromCart(i,book);
						this.addToCart(book);
						return;
					}
				}
			}	
		}
		else {
			book.number = 1;
			this.addToCart(book);
		}