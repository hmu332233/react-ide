class Command {
  constructor({ execute, undo }) {
    this.execute = execute;
    this.undo = undo;
  }
}

class CommnadInvoker {
  constructor() {
    this.history = [];
  }

  addToHistory(command) {
    this.history.push(command);
  }

  execute(command) {
    this.addToHistory(command);
    command.execute();
  }

  undo() {
    if (this.history.length > 0) {
      const prevCommand = this.history.pop();
      prevCommand.undo();
    }
  }
}

export { CommnadInvoker, Command };