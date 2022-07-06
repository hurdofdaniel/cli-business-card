import chalk from "chalk";

const data = {
    name: chalk.bold.blue("Daniel Hurd"),
    handle: chalk.white("@HurdOfDaniel"),
    bio: `${chalk.white("Student from")} ${chalk.bold.green("New Zealand")}`,
    github: chalk.gray("https://github.com/") + chalk.green("hurdofdaniel"),
    web: chalk.cyan("https://daniel.hurd.nz"),
    labelGitHub: chalk.white.bold("GitHub:"),
    labelWeb: chalk.white.bold("Web:"),
};

let meData = [
    `${data.name}`,
    ``,
    `${data.bio}`,
    ``,
    `${data.labelGitHub} ${data.github}`,
    ``,
    `${data.labelWeb} ${data.web}`,
];

export default meData;