export class TestReporter {
    constructor() {
        this.totalTests = 0;
        this.passedTests = 0;
        this.failedTests = 0;
        this.failedTestNames = [];
    }

    async runStep(testName, action) {
        this.totalTests++;

        try {
            await action();

            this.passedTests++;

            console.log(` PASSED: ${testName}`);

            return true;

        } catch (error) {
            this.failedTests++;
            this.failedTestNames.push(testName);

            console.log(` FAILED: ${testName}`);
            console.log(`   Error: ${error.message}`);

            return false;
        }
    }

    printTestSummary() {
        console.log("\n================================");
        console.log("          TEST SUMMARY");
        console.log("================================");
        console.log(`Total Tests  : ${this.totalTests}`);
        console.log(`Passed Tests : ${this.passedTests}`);
        console.log(`Failed Tests : ${this.failedTests}`);

        if (this.failedTestNames.length > 0) {
            console.log("\n FAILED TESTS:");

            this.failedTestNames.forEach((name, index) => {
                console.log(`${index + 1}. ${name}`);
            });
        }

        console.log("================================\n");
    }
}
