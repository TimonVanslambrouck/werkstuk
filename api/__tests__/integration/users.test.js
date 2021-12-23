const SERVER = require('../../index');
const supertest = require('supertest');
const REQUEST = supertest(SERVER);


let exampleTeams = [{
        id: 1,
        team: 'Los Angeles Lakers'
    },
    {
        id: 2,
        team: 'Boston Celtics'
    },
    {
        id: 3,
        team: 'Golden State Warriors'
    }
]

let exampleUsers = [{
        team: 1,
        username: 'lakersfan21'
    },
    {
        team: 2,
        username: 'celticsforever'
    },
    {
        team: 3,
        username: 'curry30'
    }
]

describe('end to end test', () => {
    it("add user to users", (done) => {
        REQUEST.post("/user")
            .send(exampleUsers[0])
            .expect(200)
            .end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            });
    });
    it("get all users", (done) => {
        REQUEST.get("/users")
            .expect(200)
            .then(
                response => {

                }
            )
    });
    it("edit user", (done) => {
        REQUEST.patch("/users:id")
            .expect(200)
            .end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            });
    });
    it("remove user", (done) => {
        REQUEST.delete("/user:id")
            .expect(200)
            .end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            });
    });
    it("get user", (done) => {
        REQUEST.delete("/user:id")
            .expect(500)
            .end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            });
    });
});

describe('end to end test teams', () => {
    it("add user to users", (done) => {
        REQUEST.post("/teams")
            .send(exampleTeams[0])
            .expect(200)
            .end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            });
    });
    it("get all teams", (done) => {
        REQUEST.get("/teams")
            .expect(200)
            .then(
                response => {

                }
            )
    });
    it("edit team", (done) => {
        REQUEST.patch("/team")
            .expect(200)
            .end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            });
    });
    it("remove user", (done) => {
        REQUEST.delete("/team/:id")
            .expect(200)
            .end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            });
    });
    it("get user", (done) => {
        REQUEST.delete("/team/:id")
            .expect(500)
            .end((err, res) => {
                try {
                    done();
                } catch (err) {
                    done(err);
                }
            });
    });
});