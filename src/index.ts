enum BakeryItemType {
  Cake,
  Bread,
  Other,
}

interface BakeryItem {
  name: string
  description?: string
  imageURL?: string
  numberInStock: number
  type: BakeryItemType
  price: number
}

const donut: BakeryItem = {
  name: 'Donut',
  description: 'just a donut',
  numberInStock: 10,
  type: BakeryItemType.Cake,
  price: 10,
}

interface PaymentMethod {
  id: string
  currency: 'gbp' | 'usd' | 'brl'
  availableBalance: number
}

interface CreditCardPaymentMethod extends PaymentMethod {
  expiryDate: Date
  type: 'credit' | 'debit'
  cardValid: boolean
}

type CashPaymentMethod = PaymentMethod

const myPaymentMethod: CreditCardPaymentMethod = {
  id: 'my-payment-method',
  currency: 'brl',
  availableBalance: 11,
  expiryDate: new Date(),
  type: 'credit',
  cardValid: true,
}

const myBackupPaymentMethod: CashPaymentMethod = {
  id: 'pay-in-cash',
  currency: 'usd',
  availableBalance: 200,
}

interface Customer {
  id: string
  primaryPaymentMethod: CashPaymentMethod | CreditCardPaymentMethod
  backupPaymentMethod: CashPaymentMethod | CreditCardPaymentMethod
  itemsInBasket: BakeryItem[]
}

const customer: Customer = {
  id: 'my-pay-a',
  primaryPaymentMethod: myPaymentMethod,
  backupPaymentMethod: myBackupPaymentMethod,
  itemsInBasket: [donut],
}

// making a payment

const makePayment = (paymentMethod: PaymentMethod, amount: number) => {
  if (paymentMethod.availableBalance < amount) {
    throw new Error('Payment method does not have sufficient funds!')
  }

  console.log('Payment was taken successfully')
}

//  buying a bakery item

const payForItemsInBasket = (customer: Customer) => {
  customer.itemsInBasket.forEach((bakeryItem) => {
    try {
      makePayment(customer.primaryPaymentMethod, bakeryItem.price)
      bakeryItem.numberInStock -= 1
      console.log(
        `Customer with ID: ${customer.id} has just purchased ${bakeryItem.name}.` +
          `There are ${bakeryItem.numberInStock} left in stock.`
      )
    } catch (error) {
      console.log(
        'Error encountered whilst making payment. Details: ',
        error.message
      )
    }
  })
}

payForItemsInBasket(customer)
