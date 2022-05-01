function counting_STAR()
{
    const cnt = 10
    for (let i = 1; i < cnt; i++)
    {
        for (let j = 1; j <= i; j++)
        {
            process.stdout.write('*');
        }
        console.log("")
    }
}