// Models
const { Post } = require('../models/post.model');

const getAllPosts = async (req, res) => {
	try {
		const posts = await Post.findAll();

		res.status(200).json({
			status: 'success',
			data: {
				posts,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const createPost = async (req, res) => {
	try {
		const { title, content, userId } = req.body;

		const newPost = await Post.create({ title, content, userId });


		res.status(201).json({
			status: 'success',
			data: { newPost },
		});
	} catch (error) {
		console.log(error);
	}
};

const updatePost = async (req, res) => {
	try {
		const { title } = req.body;
		const { id } = req.params;

		// Check if the user exists before update
		const post = await Post.findOne({ where: { id } });

		// If user doesn't exist, send error message
		if (!post) {
			return res.status(404).json({
				status: 'error',
				message: 'User not found',
			});
		}

		// Method 1: Update by using the model
		// await User.update({ name }, { where: { id } });

		// Method 2: Update using a model's instance
		await post.update({ title });

		res.status(200).json({
			status: 'success',
			data: { post },
		});
	} catch (error) {
		console.log(error);
	}
};
const deletePost = async (req, res) => {
	try {
		const { id } = req.params;

		// Check if user exists before deletion
		const post = await Post.findOne({ where: { id } });

		// If user doesn't exist, send error message
		if (!post) {
			return res.status(404).json({
				status: 'error',
				message: 'User not found',
			});
		}

		// If user exist, remove it from db

		// Method 1: Delete by using the model
		// User.destroy({ where: { id } })

		// Method 2: Delete by using the model's instance
		// await user.destroy();

		// Method 3: Soft delete
		await post.update({ status: 'deleted' });

		res.status(204).json({ status: 'success' });
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	getAllPosts,
	createPost,
	updatePost,
	deletePost,
};
