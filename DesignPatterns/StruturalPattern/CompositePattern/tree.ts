interface Component {
    add?(component: Component): void;
    remove?(component: Component): void;
    isComposite?(): boolean;
    operation(): string;
}

class Leaf implements Component {
    operation() { return 'Leaf'; }
}

class Composite implements Component {
    private children: Component[] = [];
    add(component: Component) { this.children.push(component); }
    operation() {
        return 'Branch(' + this.children.map(c => c.operation()).join('+') + ')';
    }
}
function clientCode(component: Component) {
    // ...

    console.log(`RESULT: ${component.operation()}`);

    // ...
}


// Create simple leaf and print its operation:
const simple = new Leaf();
clientCode(simple); // => RESULT: Leaf

const tree = new Composite();
const branch1 = new Composite();
branch1.add(new Leaf());
branch1.add(new Leaf());
const branch2 = new Composite();
branch2.add(new Leaf());
tree.add(branch1);
tree.add(branch2);

clientCode(tree);

