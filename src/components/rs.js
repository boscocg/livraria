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









		let totalItemsInCart;

	if (action.item.number == undefined) {
		action.item.number = 1;
	}

	if (state.list.length > 0) {
		if (state.list.length == 1 && state.list[0].id != action.item.id) {
			action.item.number = 1;
			state.list.push(action.item);
		}
		else {
			let equalBooksInCart = 0;
			let indexForRemove = 0;
			for (var i = 0, len = state.list.length; i < len; i++) {
				if (state.list[i].id == action.item.id) {
					equalBooksInCart = state.list[i].number;
					equalBooksInCart += 1;
					indexForRemove = i;
				}
			}
			if (equalBooksInCart == 0) {
				action.item.number = 1;
				state.list.push(action.item);
			}
			else if (equalBooksInCart > 0) {
				action.item.number = equalBooksInCart;
				state.list.splice(indexForRemove,1);
				state.list.push(action.item);
			}
		}	
	}
	else {
		state.list.push(action.item);
	}