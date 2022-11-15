export default class Dimension {
    constructor(readonly width: number, readonly height: number, readonly length: number) {
        if (width < 0 || height < 0 || length < 0) throw new Error("Invalid dimension");
    }

    getVolume() {
        if (this.width && this.height && this.length) {
            return (this.width / 100) * (this.height / 100) * (this.length / 100);
        } else {
            return 0;
        }
    }
}