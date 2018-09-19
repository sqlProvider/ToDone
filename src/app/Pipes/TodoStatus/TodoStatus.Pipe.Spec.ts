//#region Local Imports
import { TodoStatusPipe } from '@App/Pipes/TodoStatus/TodoStatus.Pipe';
//#region Local Imports

describe('TodoStatusPipe', () => {
	it('create an instance', () => {
		const pipe = new TodoStatusPipe();
		expect(pipe).toBeTruthy();
	});
});
