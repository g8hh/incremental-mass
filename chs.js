/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Import': '导入',
    'Level': '等级',
    'Save': '保存',
    'WIPE': '硬复位',
    'Upgrades': '升级',
    'Achievements': '成就',
    'Mass': '质量',
    'Mass capacity is': '质量容量是',
    'Export': '导出',
    'for new rank': '新级别',
    'for new tier': '新层',
    'Grid Powers.': '网格能量。',
    'Options': '选项',
    'Reach': '达到',
    'Reset for': '重置',
    'Tier': '层',
    'You have': '你有',
    'You pushed': '你推了',
    'Rank': '级别',
    'Milestones': '里程碑',
    'Buy Max': '购买最大',
    'Auto-tier': '自动层',
    'Auto-rank': '自动级别',
    'Currently': '当前',
    'Rage Powers': '愤怒力量',
    'Challenge': '挑战',
    'Rankerer': '排名者',
    'Ranker': '等级',
    'Rankest': '排名最高',
    'Upgrade Power': '升级能量',
    'Tierer': '爬层者',
    'MASSPOW!': '',
    'Dark Matters': '暗物质',
    'RAGEPUSHER': '狂暴者',
    'Black Hole': '黑洞',
    'BLACK HOLE': '黑洞',
    'Multiverse': '多元宇宙',
    'Automators': '自动化',
    '#2, #3 & #5 milestone isn\'t not prime?': '#2、#3 和 #5 里程碑不是素数吗？',
    '10! Dark Matters!': '10！ 暗物质！',
    'Rank 8: Quadruples mass gain.': '等级 8：四倍质量收益。',
    'Rank 40: For every rank (start at 40) multiples mass gain by 632.94, but will softcap at 100.': '等级 40：对于每个等级（从 40 开始），质量增益乘以 632.94，但会在 100 处软上限。',
    'Rank 30: Mass upgrade 2 is even stronger.': '30级：质量升级2更强。',
    'Rank 24: Mass upgrade 3 softcapped is weaker.': '等级 24：质量升级 3 软上限减弱。',
    'Rank 20: Rank 6 effect is stronger.': '20级：6级效果更强。',
    'Rank 17: Quintuples mass gain.': '等级 17：五倍质量增益。',
    'Rank 10: Reduce mass upgrade 3 cost scaled by 25%. Raise mass upgrade 1 effect by 1.1.': '等级 10：减少 25% 的质量升级 3 成本。 将质量升级 1 效果提高 1.1。',
    'Tetr 15: Increase Pentogen upgrade Power based on Tetrs (+97.2%).': '三阶 15：增加基于 三阶 的 五阶 升级功率 (+97.2%)。',
    'Tetr 2: Reduce tier reqirements by 10%.': '三阶 2：将层级要求降低 10%。',
    'Tetr 27: Raise mass gain by 1.1.': '三阶 27：将质量增益提高 1.1。',
    'Tetr 3: Mass upgrade 3 level boost this effect (+2.812e13 to level).': '三阶 3：质量升级 3 级增强此效果（+2.812e13 到等级）。',
    'Pent': '五阶',
    'Pent 3: Reduce tetr reqirements by 5%.': '五阶 3：减少 5% 的 三阶 要求。',
    'Pent 4: Mass upgrade 4 level boost this effect (+73,762,587 to level).': '五阶 4：质量升级 4 级增强此效果（+73,762,587 到等级）。',
    'Tetr 4: Reduce mass upgrade 4 cost scaled by 15%.': '三阶 4：将质量升级 4 成本降低 15%。',
    'Tetr 5: Mass upgrades 1-4 are 5% stronger.': '三阶 5：质量升级 1-4 强 5%。',
    'Tetr 7: Increase Rank 40 softcap by 100.': '三阶 7：将 40 级软上限提高 100。',
    'Tier 10: Rank 40 effect is stronger based on tiers.': '10层：40级的效果基于层级更强。',
    'Tier 3,': '层 3,',
    'Tier 3: Mass upgrade 2 level boost this effect (x3.827e13 to level).': '3 层：质量升级 2 级提升此效果（x3.827e13 级）。',
    'Tier 4: Reduce mass upgrade 1-3 cost scaled by 20%.': '4 层：将质量升级 1-3 成本降低 20%。',
    'Tier 5: Gain free mass upgrade 3 levels based on ranks (+1,832 to level).': '5 层：根据等级获得 3 个免费的大规模升级等级（+1,832 等级）。',
    'Tier 512: Raise PP gain by 1.25.': '第 512 层：将 五阶力量 增益提高 1.25。',
    'Tier 7: Unlock fourth mass upgrade, called \"cheaper\".': '第 7 层：解锁第四质量升级，称为“更便宜”。',
    '{{ format(FUNCS.gains.pp()) }} per second (based on ranks).': '{{ format(FUNCS.gains.pp()) }} 每秒（基于等级）。',
    '{{ format(FUNCS.getGears(), 1) }}/s (based on unspent mass': '{{ format(FUNCS.getGears(), 1) }}/秒（基于未消耗的质量',
    'Bulk Mass Upgrades': '批量质量升级',
    'Buy Mass Upgrades': '购买质量升级',
    'Cost: {{ formatMass(UPGS.mass[x].cost()) }}': '成本: {{ formatMass(UPGS.mass[x].cost()) }}',
    'Cost: {{ UPGS.EMM[x].costDesc() }} {{ UPGS.EMM[x].name }}': '成本: {{ UPGS.EMM[x].costDesc() }} {{ UPGS.EMM[x].name }}',
    'Tier 80: Increase Rank 40 softcap based on tiers (starts at 80).': '第 80 层：根据层级增加 40 级软上限（从 80 级开始）。',
    'Adds Rank 40 softcap starts later based on ADM.': '添加 等级 40 软上限 根据 反暗物质 稍后开始。',
    'Adds softcap of RP effect.': '添加 愤怒力量 效果 的软上限。',
    'Black Hole Extractor': '黑洞提取器',
    'Dark Matters Milestone': '暗物质里程碑',
    'Gain 10% of RP gain per second. Unlock third stored mass upgrade.': '每秒获得 愤怒力量 增益的 10%。 解锁第三次存储的质量升级。',
    'Gain free mass upgrade 1-2 based on total Dark Matters (+1.903e148 to level).': '获得基于总暗物质的免费质量升级 1-2（+1.903e148 等级）。',
    'Gain more RP based on unspent Anti-Dark Matters.': '基于未使用的反暗物质获得更多 愤怒力量。',
    'Multiples stored mass in Black Hole effect.': '在黑洞效应中存储质量的倍数。',
    'Multiples stored mass in Black Hole gain.': '在黑洞增益中存储质量的倍数。',
    'Raises all these prevoius upgrades effects.': '提高所有这些以前的升级效果。',
    'Rank doesn’t reset mass and upgrades.': '等级不会重置质量和升级。',
    'Start to Execute Black Hole': '开始执行黑洞',
    'Tier no longer resets rank.': '层不再重置等级。',
    'Unlock Black Hole Extractor.': '解锁黑洞提取器。',
    'Unlocks new Rage Powers upgrades. Keep RP upgrades on reset.': '解锁新的 愤怒力量 升级。 在重置时保持 愤怒力量 升级。',
    '{{ format(FUNCS.gains.gp(),0) }} Grid Powers per second (based on Multiverse number).': '{{ format(FUNCS.gains.gp(),0) }} 每秒网格功率（基于多元宇宙数）。',
    ' {{ format(UPGS.gears[r*10+c].cost(), 0) }} gears': ' {{ format(UPGS.gears[r*10+c].cost(), 0) }} 齿轮',
    '自动-pent': '自动五阶',
    '新pent': '新五阶',
    '新tetr': '新三阶',
    'Activate Challenges Alpha, Beta, Gamma & Delta.': '激活挑战阿尔法，贝塔，伽玛和德塔。',
    'ChallenGreek': '挑战希腊语',
    'DM gain formula is better. [x^0.2 → x^0.3]': '暗物质增益公式更好。 [x^0.2 → x^0.3]',
    'DM upgrades no longer give effects.': '暗物质升级不再产生效果。',
    'Gain 10% of Anti-Dark Matters gain per second.': '每秒获得 10% 的反暗物质增益。',
    'Gain 10% of Dark Matters gain per second.': '每秒获得 10% 的暗物质增益。',
    'Gain free DM upgrades 1-2 based on PP.': '获得基于 五阶力量 的免费 暗物质 升级 1-2。',
    'Gain free mass upgrades 1-4 based on Tetrs.': '获得基于三阶的免费质量升级 1-4。',
    'Gain more Pentogen Powers based on GP.': '基于网格力量获得更多的五阶力量',
    'Gain more RP based on ranks.': '根据等级获得更多 愤怒力量。',
    'Gain more RP based on unspent gears.': '根据未使用的齿轮获得更多 愤怒力量。',
    'Gain RP based on unspent RP.': '根据未使用的 愤怒力量 获得 愤怒力量。',
    'Gears gain formula is better. [log10(x+1)^0.75 → log5(x+1)^3]': '齿轮增益公式更好。 [log10(x+1)^0.75 → log5(x+1)^3]',
    'Grid Upgrades': '网格升级',
    'Keep Gear, RP & ADM upgrades on entering any challenge in ChallenGreek.': '在挑战希腊字母中进入任何挑战时保持装备、愤怒力量 和 反暗物质 升级。',
    'Mass boost Grid Powers gain.': '质量提升网格力量增益。',
    'Mass Power boosts Grid Powers gain.': '质量力量提升网格力量增益。',
    'Mass Power can affect stored mass in Black Hole gain.': '质量力量会影响黑洞增益中存储的质量。',
    'Mass Power is raised based on unspent Grid Powers.': '质量力量 是根据未使用的 网格力量 提高的。',
    'Mass Powers is raised by 0.0625.': '质量力量提高了 0.0625。',
    'Milestone': '里程碑',
    'Multiples GP gain.': '倍增网格增益。',
    'Multiples mass gain.': '倍增质量增益。',
    'Multiples RP gain.': '倍增愤怒力量增益。',
    'Multiples PP gain.': '倍增五阶力量增益。',
    'Multiples Mass Power based on mass.': '基于质量的倍增质量功率。',
    'Pentogen': '五阶',
    'Pentogen Upgrade 1 & 5 are stronger.': '升级 1和5 更强。',
    'Push over this capacity to perform. (': '推动这个容量去执行。 (',
    'Rage Powers are 15% stronger.': '愤怒力量增强 15%。',
    'Rage Powers are stronger based on stored mass in Black Hole.': '基于黑洞中储存的质量，愤怒力量会更强。',
    'Rage Powers gain formula is better. [log10(x/1.619e23+1)^2 → log5(x/1.619e23+1)^3]': '愤怒力量增益公式更好。 [log10(x/1.619e23+1)^2 → log5(x/1.619e23+1)^3]',
    'Raise RP gain by 1.25.': '提高愤怒力量增益 1.25。',
    'Rank 40 softcap starts later based on the Multiverse number.': '等级 40 软上限 根据 多元宇宙 编号稍后开始。',
    'Rank boost Mass Power.': '等级提升质量力量。',
    'RP upgrade 1:3 effect is multiplied based on tiers.': '愤怒升级 1:3 效果基于层级成倍增加。',
    'Starting scaled power on rank requirements is increased. [1.5 → 2]': '增加了对等级要求的开始缩放功率。 [1.5 → 2]',
    'Subtract rank requirement based on unspent RP.': '根据未使用的 愤怒力量 减去等级要求。',
    'Tetr doesn’t reset.': '三阶不重置。',
    'The game has ONLY rank.': '游戏只有等级。',
    'Tier 10 effect is stronger based on Multiverse number.': '基于多元宇宙编号，第 10 层效果更强。',
    'Unlock “Pentogen” (alternative version (universe) of Jacorb’s game “Distance Incremental” - Pathogen).': '解锁“五阶”（Jacorb 的游戏“距离增量” - Pathogen 的替代版本（宇宙））。',
    'Unlock 3 more Grid upgrades. You can break mass capacity and bulk rank.': '解锁另外 3 项网格升级。 您可以打破质量容量和批量等级。',
    'Unlock 5 more Grid upgrades. Keep gears upgrades on reset.': '解锁另外 5 项网格升级。 保持齿轮升级重置。',
    'Unlock Auto-buy DM upgrades.': '解锁自动购买 暗物质 升级。',
    'Unlock auto-Pent, you can bulk Tetr.': '解锁自动五阶，可以批量三阶。',
    'Unlock auto-Tetr.': '解锁自动三阶。',
    'Unlock Challenge Epsilon. Pentogen Upgrades no longer buys PP.': '解锁挑战厄普西隆。 五阶 升级不再购买 五阶力量。',
    'Unlock Ex-Mass. DM upgrades no longer spend your DM.': '解锁 Ex-质量。 暗物质 升级不再花费您的 暗物质。',
    'Unlock Ex-Mass multiplier.': '解锁 Ex-质量乘数。',
    'Unlock Grid Upgrades, start with 1-6th DM milestones unlocked and 200 Anti-DMs.': '解锁网格升级，从解锁第 1-6 个 暗物质 里程碑和 200 个反暗物质 开始。',
    'Unlock more Grid upgrades and ADM upgrade. Anti-Dark Matters doesn’t reset RP upgrades.': '解锁更多网格升级和 反暗物质 升级。 反暗物质 不会重置 愤怒力量 升级。',
    'Unlock more Grid upgrades. Keep Rage Powers upgrades, Anti-Dark Matters on reset. You can bulk tier.': '解锁更多网格升级。 保持 愤怒力量 升级，重置反暗物质。 您可以批量分层。',
    'Unlock Pent.': '解锁五阶。',
    'Unlock Tetr (need more Tiers to reset for new Tetr), and button “buy max” in Black Hole Extractor, start with all mass upgrades unlocked (except fourth mass upgrade). Mass upgrades no longer buy mass.': '解锁 三阶（需要更多的 层 来重置新的 三阶），然后在 黑洞提取器 中点击“购买最大”，从解锁所有质量升级开始（第四次质量升级除外）。 质量升级不再购买质量。',
    'You can gain stored mass passive in Black Hole without extracting Black Hole.': '您可以在不提取黑洞的情况下在黑洞中获得存储的质量被动。',
    'Upgrades in Black Hole cost is divided based on Grid Powers.': '黑洞升级成本根据网格力量分配。',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Tetr': '三阶',
    'Tetr 15: Increase Pentogen upgrade Power based on Tetrs (+FFFFF2.220F366,000,369%).': '三阶 15：增加基于三阶的五角形升级能力（+ FFFFF2.220F366,000,369％）。',
    'Tetr 10: Mass upgrade 4 are x1.1 stronger.': '三阶 10:质量升级4比以前强了1.1倍。',
    'Ex-Mass': '额外质量',
    'Divides all previous mass upgrades cost.': '划分之前所有质量升级的成本。',
    'Adds FFFFF2.220F366,000,369 mlt gained mass.': '增加FFFFF2.220F366,000,369 mlt获得质量。',
    'Rank 5: Raise mass gain by 1.25.': '等级5：提高质量增益1.25。',
    'Rank 3: Unlock second upgrade. Reduce mass upgrade 1 cost scaled by 15%.': '等级3:解锁第二次升级。减少质量升级1的成本降低15%。',
    'Rank 2: Unlock new upgrade.': '等级2：解锁新升级。',
    'Tier 2: Reduce rank reqirements by 20%.': '层2: 降低20%的等级要求。',
    'Twenty Black Holes': '20个黑洞',
    'Will penalty mass gain by': '会惩罚质量收益',
    'But any challenge hasn’t the goal, can set the mass in any challenge, will give effects.': '但任何挑战都没有目标，在任何挑战中都会设置质量，会产生效果。',
    'Antimatter?': '反物质？',
    'Black Storage': '黑存储',
    'Black Hole loves eat our Earth': '黑洞喜欢吞噬地球',
    'GLANT BLACK HOLE': '格兰特黑洞',
    'First time': '第一次',
    'Googol Fat Black Hole': '天文数字的脂肪黑洞',
    'Googol Universes!': '天文数字宇宙!',
    'Higher Rank': '更高级别',
    'Highest mountain': '最高的山',
    'Lets go, Universe!': '出发，宇宙!',
    'Mass of Multiverse capacity is': '多重宇宙的质量容量是',
    'MASSPOW!': '质量能！',
    'more universe': '更多宇宙',
    'New Era of Tiers': '跨时代新纪元',
    'NEW MULTIVERSE!!': '新的多元宇宙! !',
    'New Rank': '新级别',
    'of ex-mass.': '额外质量。',
    'No problem here': '这里没有问题',
    'While in any of this challenge, Pentogen upgrades 1 & 5 will no longer give effects.': '而在任何这个挑战中，五角形升级1和5将不再产生效果。',
    'buy mass upgrades': '购买质量升级',
    'buy DM upgrades': '购买暗物质升级',
    'Anti-Dark Matters': '反暗物质',
    'All Features unlocked!': '所有功能已解锁!',
    'Which multiples mass power by': '乘以质量能量',
    'max capacity': '最大容量',
    'Transform RP to': '转换RP为',
    'Transform DM to': '转换暗物质为',
    'stored mass in Black Hole.': '在黑洞中储存质量。',
    'total Dark Matters': '总计暗物质',
    'Increase Ex-Mass multiplier by': '增加额外质量乘数',

    //原样
    'pent': 'pent',
    'tetr': '三阶',
    'T.he T.hird T.ier': '第三层',
    'UY Scuti': 'UY Scuti',
    'Heavy go brr': '重走BRR',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "Level ": "等级 ",
    " Cost:": "成本:",
    "Currently: ": "当前: ",
    "Mass Power: ": "质量能量: ",
    "Unlock: ": "解锁: ",
    "You generated ": "你生成了",
    "You're currently in Multiverse ": "你现在身处多元宇宙",
    "Effect: ": "效果: ",
    "Mass gained: ": "质量收益: ",
    "Exit Challenge ": "退出挑战",
    "for new ": "新",
    "Ex-Mass Boost ": "额外物质提升",
    "gears, which has generated ": "齿轮，已经生成",
    "Multiverse ": "多元宇宙",
    "Rage Powers, which multiples mass gain based on unspent mass:": "狂怒能力，根据未消耗的质量增加质量增益:",
    "Auto-": "自动-",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Upgrade Power: ": "升级能量: ",
    "Dark Matters, which multiples RP gain by": "暗物质，RP增益乘以",
    "Anti-Dark Matters, which multiples Dark Matters gain by": "反黑暗物质，使黑暗物质倍增",
    "Pentogen Powers (PP), which has generated ": "五阶力量(PP)，已经产生",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    "rank": "等级",
    "tier": "层",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
    /^质量能量: x(.+)$/, //纯空格
    /^([\d\.]+) mlt$/, //纯空格
    /^([\d\.]+) kg$/, //纯空格
    /^([\d\.]+)e([\d\.,]+)$/, //纯空格
    /^([\d\.]+)e([\d\.,]+) uni$/, //纯空格
    /^当前: \+([\d\.]+)e([\d\.,]+)$/, //纯空格
    /^当前: \+([\d\.]+)e([\d\.,]+) uni$/, //纯空格
    /^成本：(.+) 网格力量$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个愤怒力量'],
    [/^解锁: Automators. Requires: (.+) tonne$/, '解锁:自动化。要求:$1 吨'],
    [/^Adds (.+) g gained mass.$/, '增加 $1 克的质量。'],
    [/^Adds (.+) kg gained mass.$/, '增加 $1 千克的质量。'],
    [/^Adds (.+) uni gained mass.$/, '增加 $1 吨的质量。'],
    [/^Adds (.+) tonne gained mass.$/, '增加 $1 吨的质量。'],
    [/^Rank ([\d\.,]+)$/, '等级 $1'],
    [/^([\d\.]+) g$/, '$1 克'],
    [/^([\d\.]+) tonne$/, '$1 吨'],
    [/^([\d\.,]+) tonne$/, '$1 吨'],
    [/^([\d\.]+) kg$/, '$1 千克'],
    [/^Rank (.+): Multiples mass upgrades (.+) effects based on ranks (.+).$/, '等级 $1：乘以质量升级 $2 效果基于等级 $3 。'],
    [/^Raises mass upgrade (.+) effect by (.+)\(additive$/, '将质量升级 $1 效果提高 $2（附加'],
    [/^Multiples mass upgrade 1 effect by (.+) \(additive$/, '质量提升1乘以 $1倍（附加'],
    [/^Rank 4: Unlock third upgrade. Reduce mass upgrade 2 cost scaled by 15\%. Mass upgrade 1 level boost this effect \(\+(.+) to level\).$/, '等级4：解锁第3次升级。 将 质量升级2 的成本降低15\％。 质量升级1级会增强此效果（\+$1级）。'],
    [/^Pent (.+): Mass upgrade (.+) level boost this effect (.+).$/, '五阶 $1：质量升级 $2 级增强此效果 $3。'],
    [/^成本: (.+) gears$/, '成本: $1 齿轮'],
    [/^Cost: (.+) Grid Powers$/, '成本：$1 网格力量'],
    [/^Cost: (.+) PP$/, '成本：$1 五阶力量'],
    [/^Cost: (.+) DM$/, '成本：$1 暗物质'],
    [/^Cost: (.+) ADM$/, '成本：$1 反暗物质'],
    [/^Cost: (.+) mlt$/, '成本：$1 mlt'],
    [/^Cost: (.+) kg$/, '成本：$1 千克'],
    [/^Cost: (.+) tonne$/, '成本：$1 吨'],
    [/^Cost: (.+) g$/, '成本：$1 克'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);