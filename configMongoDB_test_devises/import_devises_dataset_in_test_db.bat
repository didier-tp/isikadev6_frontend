set MONGO_HOME=C:\Program Files\MongoDB\Server\4.4
cd /d "%~dp0"
"%MONGO_HOME%\bin\mongoimport" --db test --collection devises --drop --file dataset/devises.json --jsonArray
pause