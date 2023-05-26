
import express from 'express';
import { Request, Response } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { deleteAccount, updateAccount } from './controllers/changeAccount';
import { getLamaSummary, getLamaSummaryFromSeller } from './controllers/lamaCards';
import { getLamaInfo, getLamaPictures } from './controllers/productInfo';
import { deleteLama, editLama, getLama, getSubscriptions } from './controllers/editlama';
import { register } from './models/register';
import { pool } from './Util/database';
import { addLamaProduct } from './controllers/addLama';
import cors from 'cors';
import { contact } from './models/contact';
import { reviewPost, reviewRead } from './models/review';

const app = express();
app.use(cors());


app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', `http://127.0.0.1:8080`);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token');
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
	pool.query("SELECT * FROM MayoLama.user WHERE username = ? AND password = ?", [req.query.username, req.query.password],
		function (err, results) {
			if (err) {
				console.log(err);
				res.status(404).json();
			};
			if (Object.keys(results).length > 0) {
				res.status(200).json({
					login: "ok",
					results
				});
			}
			else {
				res.status(401);
				res.json("nok");
			}
		});
});

app.post('/account/:id', (req, res) => {
	if (req.params.id === "update") {
		updateAccount(req, res);
	}
	else if (req.params.id === "delete") {
		deleteAccount(req, res);
	}
});

app.post('/redirect/:lamaID', async (req, res) => {
	res.json(`http://127.0.0.1:8080/product.html?id=${req.params.lamaID}`);
});

app.post('/product/:id', async (req, res) => {
	if (req.params.id === "getLamaInfo") {
		getLamaInfo(req, res);
	}
	else if (req.params.id === "getLamaPictures") {
		getLamaPictures(req, res);
	}
});

app.get('/getLamaSum', (req, res) => {
	getLamaSummary(req, res);
});

app.post('/getLamaSumSeller', (req, res) => {
	getLamaSummaryFromSeller(req, res);
});

/**
 * @author Madelief van Slooten
 * Check if user excists. If a key is returned, it means that a user already excists, status 404 is returned.
 * If there are no keys returned, a user is inserted and a value if user or seller decides in which table it is inserted.
 */
app.post('/register', (req: express.Request, res: express.Response) => {
	register(req, res);
});

/** @author Madelief van Slooten */
/** Add's a lama when every field is filled and save is clicked.*/
app.post('/addProduct', (req: express.Request, res: express.Response) => {
	addLamaProduct(req, res);
});

/** @author Madelief van Slooten */
/** this route is run when a lama gets edited.
 * These are al one part of CRUD for a lama product.
 */
app.post('/editLama/update', (req: express.Request, res: express.Response) => {
	editLama(req, res);
});

/** @author Madelief van Slooten */
/** This route gets run when the page is loaded and fills the page with the clicked lama.
 * These are al one part of CRUD for a lama product.
 */
app.post('/editLama/getlama', (req: express.Request, res: express.Response) => {
	getLama(req, res);
});

/** @author Madelief van Slooten */
/** Deletes a lama. This is now not working because of database keyconstraints, but PO said that it doesn't have priority.
 * These are al one part of CRUD for a lama product.
 */
app.post('/editLama/deletelama', (req: express.Request, res: express.Response) => {
	deleteLama(req, res);
});

/** @author Madelief van Slooten */
/** Gets the subscriptions of the clicked lama and fills the page with this info.
 * These are al one part of CRUD for a lama product.
 */
app.post('/editLama/getsubscriptions', (req: express.Request, res: express.Response) => {
	getSubscriptions(req, res);
});

/** 
 * @author Youri Janssen
 * This part is used to create routes for back-end communication.
 */
app.post('/contact', async (req, res) => {
	let result = await contact(req, res);
});

app.post('/review/post', async (req, res) => {
	let post = await reviewPost(req, res);
});

app.post('/review/read', async (req, res) => {
	let read = await reviewRead(req, res);
});

/**
 * support
 */
app.post('/support', async (req, res) => {

	let result = await support(req, res);

});
async function support(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
	pool.query(`INSERT INTO MayoLama.user_sub (userID, subID)VALUES (?, ?) `, [req.body.userId, req.body.subId],
		function (err, result) {
			if (err) {
				console.log(err);
				console.log('error');
			} else {
				console.log('data inserted');
				res.end();
			}
		})
}

/**
 * @author Mays
 */
app.post('/support/read', async (req, res) => {
	let read = await supportRead(req, res);
});

async function supportRead(req: Request<{}, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>, number>) {
	pool.query(`SELECT * FROM MayoLama.subscription WHERE userID = ?`,
		[req.body.subID], function (err: any, result: any) {
			if (err) {
				console.log(err);
				console.log('error');
			} else {
				console.log('Subscription data');
				res.status(200
				).json(
					result
				);
			}
		});
}


const PORT = 4001;
app.listen(PORT, () => {
	console.log(`Server is running on localhost:${PORT}`);
});


