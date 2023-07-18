import connectDB from './db';
import User from '../../models/user';

const googleLogin = async (req, res) => {
  // เชื่อมต่อกับฐานข้อมูล MongoDB
  connectDB();

  try {
    // ดึงข้อมูลผู้ใช้จาก Google Login ที่รับมาจาก req.body
    const { name, email, googleId } = req.body;

    // สร้างข้อมูลผู้ใช้ในฐานข้อมูล
    const user = new User({
      name,
      email,
      googleId,
    });

    // บันทึกข้อมูลผู้ใช้ในฐานข้อมูล
    await user.save();

    res.status(200).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Failed to create user', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
};

export default googleLogin;
