router.post('/', async (req, res) => {
  try {
    const { user, products, totalAmount, paymentMethodId } = req.body;

    if (!user || !products || !totalAmount || !paymentMethodId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create a new order
    const order = new Order({
      user, // Make sure to send a valid user ID
      products,
      totalAmount,
      paymentMethodId,
      // Include other fields if necessary
    });

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Server error' });
  }
});
