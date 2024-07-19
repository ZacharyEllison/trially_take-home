import os

# there are other ways you can structure this as the base increases in complexity
DB_USER = os.environ.get("DB_USER")
DB_PASS = os.environ.get("DB_PASS")
DB_PORT = os.environ.get("DB_PORT")