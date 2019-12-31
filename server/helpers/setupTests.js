import { Types } from "mongoose";
import { connectDatabase } from "~database";

const mockRequest = (user, session, body, query, params) => ({
	user,
	session,
	body,
	query,
	params,
});

const mockResponse = () => {
	const res = {};
	res.clearCookie = jest.fn().mockReturnValue(res);
	res.status = jest.fn().mockReturnValue(res);
	res.json = jest.fn().mockReturnValue(res);
	res.send = jest.fn().mockReturnValue(res);
	return res;
};

export { mockRequest, mockResponse };

global.ObjectId = Types.ObjectId;
global.connectDatabase = connectDatabase;
global.mockRequest = mockRequest;
global.mockResponse = mockResponse;
