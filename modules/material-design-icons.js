import { resolve } from 'path'

const icons = ['Home', 'Account', "BriefcaseAccount", "CardAccountMail"]

export default function () {
	this.nuxt.hook('components:dirs', (dirs) => {
		dirs.push({
			path: resolve('node_modules/vue-material-design-icons'),
			prefix: 'MaterialIcon',
			pattern: `**/@(${icons.join('|')}).vue`,
		})
	})
}